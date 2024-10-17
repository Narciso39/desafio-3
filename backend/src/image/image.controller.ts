import { Body, Controller, Get, Post, Res, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import {diskStorage} from 'multer'
import * as path from "path";



interface fileParams {
    fileName: string;
}

@Controller("image")
export class ImageController {

    @Post("/upload")
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: "./../uploads",
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`)
            }
        })
    }))
    async uploadFile() {
        return "sucess";
    }

    @Get()
    getFile(@Res() res: Response, @Body() file: fileParams) {
        res.sendFile(path.join(__dirname, "../../../uploads/" + file.fileName));
    }
    
}