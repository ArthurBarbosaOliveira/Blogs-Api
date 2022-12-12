const BlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define("BlogPost", {
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
        foreignKey: true,
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
    return BlogPost;
  };

module.exports = BlogPost;
