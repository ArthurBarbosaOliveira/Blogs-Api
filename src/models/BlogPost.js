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
        type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW
      },
      updated: {        
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    },
    {
        timestamps: false,
        underscored: true,
        createdAt: 'published',
        updatedAt: 'updated',
        tableName: 'blog_posts'
    });     
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
          { foreignKey: 'userId', as: 'user' });
      };
    /*BlogPost.associate = (models) => {
        BlogPost.belongsToMany(models.PostCategory,
            { foreignKey: 'post_id', as: 'PostCategory' });
        };*/
    return BlogPost;
  };

module.exports = BlogPost;
