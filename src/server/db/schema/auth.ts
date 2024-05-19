import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
	(name) => `nextjs-ecommerce-tempalte_${name}`,
);

export const USERS = createTable(
	"user",
	{
		id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		name: text("name", { length: 256 }),
		createdAt: int("created_at", { mode: "timestamp" })
			.default(sql`CURRENT_TIMESTAMP`)
			.notNull(),
		updatedAt: int("updatedAt", { mode: "timestamp" }),
	},
	(example) => ({
		nameIndex: index("name_idx").on(example.name),
	}),
);