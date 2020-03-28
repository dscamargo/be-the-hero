const connection = require('../../database/connection')

class IncidentController{
  async index(req,res){
    const {page = 1, per_page = 5} = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .limit(per_page)
    .offset((page - 1) * per_page)
    .select(['incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf']);

    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  }

  async store(req,res){
    const {title, description, value} = req.body;
    const ong_id = req.headers.authorization;

    if (!ong_id) return res.status(422).json({error: 'ID da ong não foi informado'})

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.status(201).json({id})

  }

  async destroy(req,res){
    const {id} = req.params;
    const ong_id = req.headers.authorization;

    if (!ong_id) return res.status(400).json({error: 'Não foi informado ONG ID'})

    const incident = await connection('incidents').where('id', id).select('ong_id').first();

    if (!incident) return res.status(404).json({error: 'Registro não encontrado'})

    if (ong_id !== incident.ong_id) return res.status(401).json({error: 'Operation not permitted'});

    await connection('incidents').where('id', id).delete();

    return res.status(204).send()

  }
}

module.exports = new IncidentController();