export default function() {

  this.namespace = '/api';
	let lists = [/*{
		id: 1,
		type: 'list',
		attributes: {
			title: 'kek'
		}
	},*/
    
  ];

  this.get('/lists', function(db, request) {
      return { data: lists };
  });

  this.get('/lists/:id', function (db, request) {
    return { data: lists.find((list) => request.params.id === list.id) };
  });
}
