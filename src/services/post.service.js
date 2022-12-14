const { BlogPost, User, PostCategory, Category } = require('../models');

const create = async ({ categoryIds, title, content }, token) => {
        console.log('test', categoryIds, title, content, token);
        // const { type, message } = await validation.checkCategory(categoryIds);
        // if (type) return { type, message };
        // console.log("token", token);
        const user = await User.findOne({
          where: { email: token.data },
        });
        console.log('TESTEEE', user);
        if (!user) return { type: 'test', message: 'Some required fields are missing' };
        const createPost = await BlogPost.create({ userId: user.id, title, content });
        console.log('TESTE@@@@', createPost);
        await Promise.all(
          categoryIds.map((category) =>
            PostCategory.create({ categoryId: category, postId: createPost.id })),
        );

        return { type: null, message: createPost };
      };
      const getAll = async () => {
        const getPosts = await BlogPost.findAll({
          include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
            { model: Category, 
              as: 'categories', 
              throught: { attributes: [] } }],
        });
        
        return { type: null, message: getPosts };
        };

const test = {};

module.exports = { 
    create,
    getAll,
    test,
};
