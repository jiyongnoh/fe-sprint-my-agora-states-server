const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    
    let fiteredIndex = discussionsData.findIndex(discussion => {
      return Number(id) === discussion.id;
    })
    
    if(fiteredIndex !== -1){
      return res.status(200).json(discussionsData[fiteredIndex]);
    }
    else{
      return res.status(404).json();
    }
    
  }

};

module.exports = {
  discussionsController,
};
