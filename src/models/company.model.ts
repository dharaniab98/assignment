import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../database/connection';
import { Team } from './team.model';

export class Company extends Model {
  public companyId!: string;
  public companyName!: string;
  public companyCeo!: string;
  public companyAddress!: string;
  public inceptionDate!: Date;
}

Company.init(
  {
    companyId: { type: DataTypes.UUID, primaryKey: true },
    companyName: { type: DataTypes.STRING, allowNull: false, unique: true },
    companyCeo: { type: DataTypes.STRING, allowNull: false },
    companyAddress: { type: DataTypes.STRING },
    inceptionDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    sequelize,
    tableName: 'Companies',
    timestamps: false,
  }
);

Company.hasMany(Team, { foreignKey: 'companyId', as: 'teams' });
Team.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });
