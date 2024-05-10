// require model

const chatList = [
    {
        id: "1",
        users: ["uid1, uid2"],
        messages: [
            {
                messageId: "m1",
                text: "hello!"
                // each message will also have a timestamp
            },
            {
                messageId: "m2",
                text: "hello to you too!"
            }
        ]
    },
    {
        id: "2",
        users: ["uid1, uid2"],
        messages: [
            {
                messageId: "m3",
                text: "Wow this is cool!"
            },
            {
                messageId: "m4",
                text: "I know right!"
            }
        ]
    }
]

const getAllChats = (req, res, next) => {
    // need to change this to getAllChats for logged in user
    // e.g. getAllChatsForUserID or getAllChatsForLoggedInUser

    return res.json({chats: chatList})
}

const getChatByID = (req, res, next) => {
    const {cid} = req.params
    const chat = chatList.filter((chat) => chat.id === cid)

    return res.json({chat})
}

const postChatMessage = (req, res, next) => {
    const {cid} = req.params;
    console.log(req.body)
    const {messageId, text} = req.body;

    const chatToUpdate = chatList.filter((chat) => chat.id === cid)
    console.log(chatToUpdate)
    chatToUpdate[0].messages.push({messageId: messageId, text: text})
    console.log(chatToUpdate[0].messages, 'chatToUpdate')

    return res.json({messages: chatList})
}

exports.getAllChats = getAllChats;
exports.getChatByID = getChatByID;
exports.postChatMessage = postChatMessage;