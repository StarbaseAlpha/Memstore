# Memstore
Starbase Memory Store

Portable In-memory key value store for Node.js and The Web. Memstore is an API-compatible datastore based on the [Starbase Database](https://github.com/StarbaseAlpha/Database) API and works as a datastore for [Starbase Channels](https://github.com/StarbaseAlpha/Database).

## Adding Starbase Memstore to your Project

### On the Web
```HTML
<script src="/path/to/memstore.min.js"></script>
```

### On the Web via jsdelivr CDN
```HTML
<script src="https://cdn.jsdelivr.net/npm/@starbase/memstore/memstore.min.js"></script>
```

### In NodeJS
```bash
npm install @starbase/memstore 
```


## Using the Memstore

The API methods for Memstore matches the Starbase Database API. Please see the [Starbase Database Manual](https://github.com/StarbaseAlpha/Database) for examples and further documentation.


## More Information

Starbase Memstore stores data in memory and functions as a data store on Node.js and in the browser. When used in a Node.js application, the data will persist until the application stops or is terminated. In the browser, the data persists until the window/tab is refreshed or closed.

Memory storage is suitable for temporarily storing and managing data in memory. One use case is storing data in the browser that is then displayed to the user. Changes can be made to the memory store data and then exported and saved in a more permanent storage engine or discarded. On the server, a memory store could be used as a cache for frequently accessed data.

Memory stores can write (and often access) data faster than permanent storage engines with some important limitations to consider. The amount of physical memory available to the server or browser should be considered when storing and accessing data from a memory store. Large datasets (many MBs in size) can be slow or sluggish depending on the resources available to the application. It is best to store large amounts of data in a permanent storage engine and use memory storage for caching and managing smaller sets of data.

