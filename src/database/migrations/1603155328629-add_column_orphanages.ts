import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnOrphanages1603155328629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("orphanages", new TableColumn({
            name: 'phone',
            type: 'varchar',
            isNullable: true,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("orphanages", "phone");
    }

}
