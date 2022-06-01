require( 'colors' );
const express = require( 'express' );
const app = express();
const http = require( 'http' );
const server = http.createServer( app );
const cors = require( 'cors' );
const { Server } = require( 'socket.io' );
const io = new Server( server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: [ 'GET', 'POST' ]
    }
} );
const puerto = 3030;



app.get( '/', ( req, res ) => {
    res.send( 'Hello Wordl' );
})

app.get( '/test', ( req, res ) => {
    res.send( 'OK' );
} )

io.on( 'connection', ( socket ) => {
    console.log( 'Usuario conectado'.rainbow ); 
} )

app.use( cors() );

server.listen( puerto, () => {
    console.log( `Server is listening in http://localhost:${ puerto }` );
} )

