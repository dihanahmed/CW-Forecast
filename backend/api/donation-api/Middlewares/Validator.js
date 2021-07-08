
    const isEmpty =  (data) => {
        return data === undefined || data === null || data === '';
    }



module.exports ={

    validateData: (request,response,next)=>{
        const data = {
            donorName: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            treeID: request.body.treeID,
        }
        console.log(data);
        if(isEmpty(data.phone)||isEmpty(data.email)||isEmpty(data.treeID) || isEmpty(data.donorName)){
            return response.json({donationSuccessful: false, reason: "Not Enough Data"});
        }
        else {
            request.body.data = data;
            next();
        }
    }
}