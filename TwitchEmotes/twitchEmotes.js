if(window.location.hostname === "www.twitch.tv")
{
    function checkForEmotes()
    {
        var messages = document.getElementsByClassName("text-fragment");
		var last = messages.item(messages.length -1);

        if(messages)
        {
            var emotes = {
                "Pog" : "https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/8BKhp5PRuaKrcNWaWKiz",
				"KEKW" : "https://www.streamscheme.com/wp-content/uploads/2020/07/kekw-emote.jpg",
				"lilW" : "https://yt3.ggpht.com/ytc/AAUvwnjGkfXAkwxGMfTERLq9EyPtC6O-cfBG2lBmFlIM=s176-c-k-c0x00ffffff-no-rj",
				"peepoClap" : "https://cdn.betterttv.net/emote/5d38aaa592fc550c2d5996b8/3x"
            };

			var message = last.innerHTML;
			var words = message.split(" ");
			last.innerHTML = "";
			var finalMessage = "";

			for(var x = 0; x < words.length; x++)
			{
				for(emote in emotes)
				{
					var igual;
					if(emote === words[x])
					{
						igual = true;
						finalMessage += '<div class="chat-line__message--emote-button" data-test-selector="emote-button">' +
													'<span data-a-target="emote-name">' +
													'<div class="chat-image__container tw-align-center tw-inline-block">' +
													'<img alt="'+ emote +'" class="chat-image chat-line__message--emote" src="'+ emotes[emote] +'">'+
													'</div>'+
													'</span>'+
													'</div>' + " ";
													break;
					}
					else
					{
						igual = false;
					}
				}
				
				if(igual === false)
				{
					finalMessage += words[x] + " ";
				}
			}
			
			last.innerHTML = finalMessage;
            
        }
    }
    
    const targetNode = document.getElementsByClassName("chat-scrollable-area__message-container")[0];

    const config = { attributes: false, childList: true, subtree: false };

    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                checkForEmotes();
            }
        }
    };

    const observer = new MutationObserver(callback);

    observer.observe(targetNode, config);
}