const repository = require('../../src/repository/general-repository');

describe('general repository', () => {
    test('should insert items normally', async () => {
        const item = {
            id: 'test-insert'
        };

        await repository.insert(item);

        const result = await repository.findById(item);

        expect(result).toMatchObject(item);
    });

    test('should find many items normally', async () => {
        const result = await repository.find();
        expect(result.length).not.toBe(0);
    });

    test('should find items by ID normally', async () => {
        const filter = { id: 'amzn1.ask.account.testUser' };
        const result = await repository.findById(filter);

        expect(result).not.toBeNull();
    });

    test('should update an item normally', async () => {
        const item = {
            id: 'test-update'
        };

        const addition = {
            description: 'I am probably updated',
        }

        await repository.insert(item);

        const expression = "set description = :description";
        const attributes = {
            ':description': addition.description,
        };

        const result = await repository.updateById(item, expression, attributes);

        expect(result).toMatchObject(addition);
    });

    test('should delete an item normally', async () => {
        const item = {
            id: 'test-delete'
        };

        await repository.insert(item);
        
        let result = await repository.findById(item);

        expect(result).toMatchObject(item);

        await repository.deleteById(item);

        result = await repository.findById(item);

        expect(result).toBeUndefined();
    });
});