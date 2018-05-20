import { post, expect } from 'chakram';
import * as using from 'jasmine-data-provider';
import { environemnt, endpoint, timeout } from '../configs/config';
import { postData } from '../testData/post.td';
import schema from '../schemas/post.schema';

const url: string = environemnt + endpoint.post;

describe('POST Endpoint', () => {

    using(postData, (data: any) => {
        describe(`JSON: ${JSON.stringify(data.postData)}`, () => {
            let apiResponse: any;

            it('should return 200 on success', () => {
                apiResponse = post(url, data.postData);

                return expect(apiResponse).to.have.status(200);
            });

            it('should respond with correct JSON data', () => {
                return expect(apiResponse).to.have.json('data', JSON.stringify(data.postData));
            });

            it('should respond with data matching schema', () => {
                return expect(apiResponse).to.have.schema(schema);
            });

            it('should respond within maximum response time', () => {
                return expect(apiResponse).to.have.responsetime(timeout);
            });
        });
    });
});