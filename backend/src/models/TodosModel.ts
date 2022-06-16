import { Model } from 'objection';

export class TodosModel extends Model {
    static get tableName() {
        return 'todos';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['todo'],

            properties: {
                id: { type: 'integer' },
                todo: { type: 'string', minLength: 1, maxLength: 200 },
                is_done: { type: 'boolean' }
            }
        };
    }
}