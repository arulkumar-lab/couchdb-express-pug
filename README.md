# couchdb-express-pug
couchdb express pug user details

Pug (Jade) page loads the user details from couchDB.

####Pre-request steps:

Download and Install Apache CouchDB. Refer here <a href="https://couchdb.apache.org/">CouchDB</a>

Run the Apache CouchDB Fauxton from localmachine  

```http://localhost:5984/_utils/#/_all_dbs```

Create database couchdb_mydb

To See the records from the database use the below query to run in browser URL:

``` http://localhost:5984/couchdb_mydb/_all_docs?```

####Application running steps:

Download code from git.

``` npm install ```

To run the application

```npm run start```

Browser URL:
```http://localhost:3000/```
