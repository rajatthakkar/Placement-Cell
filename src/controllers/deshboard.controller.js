import path from 'path';


export default class DeshboardController {

    async deshboard(req, res) {
        try {
            console.log("inside login function")
            // Use path.join to construct the file path
            const filePath = path.join(path.resolve(), 'src', 'views', 'deshboard.ejs');

            console.log(filePath)
            // Send the file as a response
            return res.render(filePath);
        } catch (error) {
            console.error('Error sending login page:', error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }

}
