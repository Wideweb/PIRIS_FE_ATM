import routing from './routing';
import routes from './routes';
import fakeBackend from './fake-backend';
import http from './http';

export default ngModule => {
    routing(ngModule);
    routes(ngModule);
    http(ngModule);
    //fakeBackend(ngModule);
}