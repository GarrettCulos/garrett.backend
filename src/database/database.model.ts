import sq from 'sequelize';

export class DatabaseModelT {
	public name?: string;
	public options?: sq.DefineOptions<any>;
	public columns?: sq.DefineAttributes; // { [name: string]: ≈ };
}

export class DatabaseModel extends DatabaseModelT {
	public q: sq.Model<any, any>;

	constructor(data: DatabaseModelT, sql: sq.Sequelize) {
		super();
		this.name = data.name;
		this.columns = data.columns;
		this.options = data.options;
		this.q = sql.define(data.name, data.columns, data.options);
	}
}

export const defaultTableOptions: sq.DefineOptions<any> = {
	underscored: false,
	timestamps: true,
	freezeTableName: true
};

export const defaultTableId: sq.DefineAttributeColumnOptions = {
	type: sq.INTEGER,
	autoIncrement: true,
	primaryKey: true
};
