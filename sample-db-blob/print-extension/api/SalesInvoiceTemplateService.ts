import { DocumentTemplateRepository as DocumentTemplateDao } from "../../../sample-db-blob/gen/codbex-templates/dao/Templates/DocumentTemplateRepository";

import { Controller, Get } from "sdk/http";
import { database, ResultSet } from "sdk/db"


@Controller
class SalesInvoiceTemplateService {

    private readonly templateDao;

    constructor() {
        this.templateDao = new DocumentTemplateDao();
    }

    @Get("/:Type")
    public salesInvoiceData(_: any, ctx: any) {
        const templateType = ctx.pathParameters.Type;

        const template = this.templateDao.findAll({
            $filter: {
                equals: {
                    Type: templateType
                }
            }
        })

        let result = "";
        for (let i in template[0].Content) {
            result += String.fromCharCode(template[0].Content[i]);
        }
        return result;
    }
}
