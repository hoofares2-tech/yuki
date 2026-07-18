module.exports.config = {
    name: "reply",
    eventType: ["message"],
    version: "1.0.0",
    credits: "User",
    description: "رد تلقائي عند مناداة البوت"
};

module.exports.handleEvent = async ({ event, api }) => {
    const { body, threadID, senderID } = event;
    
    // هنا تستطيع تغيير كلمة "بوت" إلى أي اسم تريده
    if (body && body.toLowerCase() == "بوت") {
        api.sendMessage("أهلاً يا صديقي، كيف يمكنني مساعدتك اليوم؟", threadID);
    }
};

module.exports.run = async ({}) => {};
