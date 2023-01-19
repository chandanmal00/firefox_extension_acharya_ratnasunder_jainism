(function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const entity_images = [ "e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg", "e5.jpg", "e6.jpg", "e7.jpg", "e8.jpg", "e9.jpg", "e10.jpg"]
  const author_names = ["श्री आचार्य रत्नसुन्दरसूरीश्वरजी म.सा.", "Acharya Ratnasundersuri M.S", "पद्मविभूषण विभूषित पूज्य जैनचार्य विजय रत्नसुंदरसूरीश्वरजी महाराज साहेब"]


  const quotes = [
    {
      quote: 'When you Pray, God Listens\n' +
      'When you Listen, God Talks\n' +
      'When you Believe, God works.\n',
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "परिवार के एक ही सदस्य का असंतोष, घर में रामायण-महाभारत का सर्जन कर सकता है •••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "परिवार के मुखिया के पास विवेक और परिवारजनों के पास सहिष्णुता हो तो परिवार में कभी कोई तनाव पैदा नहीं होगा •• स्वर्ग पैदा हुए बिना रहेगा नहीं •••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "एक-दूसरे को सहयोग करने की मानसिकता, सुखी परिवार की आधारशिला है•••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "इंसान सारी दुनिया की बड़ी से बड़ी चोट सहन कर सकता है, पर अपनों की एक हल्की सी चोट उसे तोड़ देती है •• बिखेर देती है •••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "पैसा-पद-प्रतिष्ठा, ये सब होते हुए भी घर में आप सुखी नहीं हैं तो सब बेमानी है•••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "संयुक्त परिवार में हर तरह की सुरक्षा है, फिर भी ••• अपनी बेटी के लिए विभक्त परिवार का आपका आग्रह क्यों •••",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "पैर में चुभ गए कांटे का बचाव अर्थात् पैर के लिए खतरा ••• अपनी गलतियों का बचाव अर्थात् सद् गति के लिए खतरा •••!",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "क्या आप अपने बेटे के लिए एक Role Model,  एक आदर्श हैं ? यदि नहीं, तो आपको गंभीरता से अपने जीवन का मूल्यांकन करने की आवश्यकता है !",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "Life Saving T-I-P-S (tips)\n" +
      "\n"+
      "T –Tolerating Nature\n" +
      "I – Improving Nature\n" +
      "P – Polite Nature\n" +
      "S – Sacrificing Nature" ,
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "आज जो मिला है (अच्छा या बुरा) वह Result है, उस पर उसका Reason क्या है, कभी सोचा है इस बारे में ... ?  ",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "मन बढ़ा बदमाश है आपको धर्म करने की ना नहीं कहेगा, पर पाप छोड़ने की हां कभी नहीं कहेगा ..! सावधान !",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "पीड़ा का प्रतिकार उसकी ताकत को बड़ा देता है ...\n" +
      "पीड़ा का स्वीकार उसकी ताकत को ख़त्म कर देता है ...",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "प्रभु को पाना है ? पुण्य चाहिए...\n" +
      "प्रभु बनना है ? प्रेम चाहिए.",
      author: "Acharya Ratnasundersuri M.S",
    },
     {
      quote: "हृदय कैसा चलता है यह जवाब  विज्ञान के पास है ...\n" +
      "ह्रदय में क्या चलता है , यह जवाब हमारे खुद के पास ही है .",
      author: "Acharya Ratnasundersuri M.S",
    },
     {
      quote: "क्रोध अकेला ही आता है, परन्तु बहुत कुछ लेकर चला जाता है ...\n" +
      "संतोष अकेला ही आता है, परन्तु अपने साथ बहुत कुछ लेकर आता है.",
      author: "Acharya Ratnasundersuri M.S",
    },
     {
      quote: "आँख बंद होने पर पुण्य यही रह जायेगा, धर्म साथ आएगा...\n" +
      "इसलिए पुण्य का हर संभव उपयोग धर्म के लिए कर लेना !.",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "संतान सुख तो हर हज़ारों माँ बाप के पास है किन्तु ...\n" +
      "संतान से सुख कितने माँ बाप के पास है ?",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "प्रभु खुद की गलती की क्षमा मांग सकू  और, सामने वालो की गलती को माफ़ कर सकू\n" +
      "- ऐसी ताकत आपसे मांगता हूँ",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "मन को मस्त रखना हो\n" +
      "अंतः करण  को पवित्र रखना हो और\n" +
      "जीवन को निर्दोष रखना हो तो \n" +
      "उसके लिए यह मंगल त्रिपुटी हे\n" +
      "- जगत को माफ़ करो\n" +
      "- खुद को साफ करो\n" +
      "- कर्मो को ख़ाक करो",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "आप कहा हो यह महत्त्व की बात नहीं, आपकी नज़र कहा है यह महत्व की बात है",
      author: "Acharya Ratnasundersuri M.S",
    },
    {
      quote: "भाव, प्रभाव और स्वभाव को संभाल लो, सब मस्त हो जायेगा",
      author: "Acharya Ratnasundersuri M.S",
    },
    ];

  function newQuote(quotes) {
    let n = getRandomInt(0, quotes.length);
    let m = getRandomInt(0, entity_images.length);
    let k = getRandomInt(0, author_names.length);
    const quote = document.getElementById("quote");
    const entity_img_id = document.getElementById("entity_id");
    if (quote && author) {
      quote.innerText = quotes[n].quote;
      author.innerText = "—" + author_names[k];
      entity_img_id.src = "icons/" + entity_images[m]
      entity_img_id.title = author_names[k]
      entity_img_id.alt = author_names[k]
    }
  }

  newQuote(quotes);
})();
