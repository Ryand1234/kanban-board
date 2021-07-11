var axios = require('axios');

module.exports = async function queryToDatabase (data, op) {
  const updateData = JSON.stringify({
    "operation": "update",
    "schema": "tasks",
    "table": "task",
    "records": [
        {
            "id": data? data.id: '',
            "status": data? data.status: ''
        }
    ]
  })

  const deleteData = JSON.stringify({
    "operation": "delete",
    "schema": "tasks",
    "table": "task",
    "hash_values": [
        data? data.id: ''
    ]
  })

  const fetchData = JSON.stringify({
    "operation": "sql",
    "schema": "tasks",
    "sql": "SELECT * FROM tasks.task"
  })

  const insertData = JSON.stringify({
    "operation": "insert",
    "schema": "tasks",
    "table": "task",
    "records": [data]
  });

  let config = {
    method: 'post',
    url: 'https://kanban-kanbanboard.harperdbcloud.com',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Basic ${process.env.authToken}`
    },
    data : data
  };
  switch(op)
  {
    case 1: config.data = insertData; break;
    case 2: config.data = updateData; break;
    case 3: config.data = fetchData; break;
    default: config.data = deleteData; break;
  }

  const d = await axios(config)
  return d.data
  
}
