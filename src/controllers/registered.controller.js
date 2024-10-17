import path from 'path';
import RagisterdReposatory from '../reposatory/ragisterd.rapository.js';

export default class RegisteredController {
    constructor() {
        this.ragisterRepo = new RagisterdReposatory()
    }
    async login(req, res) {
        const {email,password} = req.body
        try {
            const result = await this.ragisterRepo.checkIfUserIsRagisterd(email)
            if(result){
               const userPass = await this.ragisterRepo.signIn(email,password) 
               console.log("result paswword",userPass)
               if(userPass.status === true){
                const filePath = path.join(path.resolve(), 'src', 'views', 'deshboard.ejs');
                console.log(filePath)
                // Send the file as a response
                return res.render(filePath);
               }else{
                const filePath = path.join(path.resolve(), 'src', 'views', 'Message.ejs');
                // Send the file as a response, passing the newuser object to the EJS template
                return res.render(filePath, { userStatus: result.message });
               }
               
            }
            console.log("about login",result)
            
            // Use path.join to construct the file path
           
        } catch (error) {
            console.error('Error sending login page:', error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async ragisterd(req, res) {
        try {
            const filePath = path.join(path.resolve(), 'src', 'views', 'siginup.ejs')
            return res.render(filePath)
        } catch (error) {

        }
    }
    async signup(req, res) {
        const { name, email, password, confirmPassword } = req.body
        try {
            const newuser = await this.ragisterRepo.signup({ name, email, password, confirmPassword })
            console.log(newuser)
            if (newuser.status === false) {  // Fix the condition to check user status correctly
                console.log("inside if", newuser);
                // Use path.join to construct the file path
                const filePath = path.join(path.resolve(), 'src', 'views', 'Message.ejs');
                // Send the file as a response, passing the newuser object to the EJS template
                return res.render(filePath, { userStatus: newuser.message });
            }
           
            // Use path.join to construct the file path
            const filePath = path.join(path.resolve(), 'src', 'views', 'signin.ejs');
            // Send the file as a response
            return res.render(filePath);
        } catch (error) {
            console.error('Error sending login page:', error);
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }

}
