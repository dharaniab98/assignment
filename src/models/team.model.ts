import { Model, DataTypes } from 'sequelize';
import { sequelize } from './../database/connection';

export class Team extends Model {
  teamId!: string;
  companyId!: string;
  teamLeadName!: string;
}

Team.init(
  {
    teamId: { type: DataTypes.UUID, primaryKey: true },
    companyId: { type: DataTypes.UUID, allowNull: false },
    teamLeadName: { type: DataTypes.STRING },
  },
  {
    sequelize,
    tableName: 'Teams',
  }
);
