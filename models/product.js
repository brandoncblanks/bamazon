module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Product", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
        }
      },
      department: {
        type: DataTypes.TEXT,
        allowNull: false,
      
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      stock: {
        type: DataTypes.TEXT,
        allowNull: false
        
      },
    );
  
    Post.associate = function(models) {
     
        Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Product;
  };
  