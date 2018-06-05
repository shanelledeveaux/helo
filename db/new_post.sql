insert into posts(author_id, title, content)
values($1, $2, $3)
returning *;