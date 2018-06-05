update posts
set content = $2
where id= $1
returning *;