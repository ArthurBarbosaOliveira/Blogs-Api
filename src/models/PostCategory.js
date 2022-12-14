const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
    postId: {        
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    categoryId: {
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
    });
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category ,
          { foreignKey: 'postId', as: 'categories', through: PostCategory, otherKey: 'categoryId', });
        models.Category.belongsToMany(models.BlogPost ,
          { foreignKey: 'categoryId', as: 'blog_posts', through: PostCategory, otherKey: 'postId', });
     };    
    
    return PostCategory;
  };

module.exports = PostCategory;
