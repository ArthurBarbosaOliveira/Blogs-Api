const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
      id: {        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'categories'
    });
    /*Category.associate = (models) => {
      Category.belongsToMany(models.PostCategory,
        { foreignKey: 'category_id', as: 'PostCategory' });
    };         
    */
    return Category;
  };

module.exports = Category;
