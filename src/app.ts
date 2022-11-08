import express, { Application }from 'express';

const app = express();
app.use(express.json());

export class App{

    app : Application;

    constructor(private port: number | string){
      this.app = express();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port 3000');
    }
}

