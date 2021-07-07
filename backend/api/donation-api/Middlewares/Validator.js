
    const isEmpty =  (data) => {
        return data === undefined || data === null;
    }



module.exports ={

    validateData: (request,response,next)=>{
        const data = {
            donorName: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            treeID: request.body.treeID,
        }
        if(isEmpty(data.phone)||isEmpty(data.email)||isEmpty(data.phone) || isEmpty(data.donorName)){
            return response.json({donationStatus: false, reason: "Not Enough Data"});
        }
        else {
            request.body.data = data;
            next();
        }
    }
}