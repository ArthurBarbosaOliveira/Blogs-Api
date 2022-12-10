const blog_posts = (sequelize, DataTypes) => {
    const blog_posts = sequelize.define("blog_posts", {
      id: {        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      published: {
        type: DataTypes.DATE
      },
      updated: {        
        type: DataTypes.DATE
      },
    },
    {
        timestamps: false,
        underscored: true,
        createdAt: 'published',
        updatedAt: 'updated',
        tableName: 'blog_posts'
    });     
    blog_posts.associate = (models) => {
      blog_posts.belongsTo(models.User,
          { foreignKey: 'userId', as: 'users' });
      };
    return blog_posts;
  };

module.exports = blog_posts;
