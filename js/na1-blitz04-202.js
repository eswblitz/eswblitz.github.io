
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
   <head>
   <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
</head>
<script src="https://subbu--c.na1-blitz04.visual.soma.force.com/lightning/lightning.out.js"></script>
<div id="button_goes_here"/>
   <script>
    $Lightning.use("embeddedService:liveAgentSidebarApp", function() {
       $Lightning.createComponent("embeddedService:liveAgentSidebar", {
         deploymentId : '572D00000004CSa',
         orgId : '00DD00000008649',
         buttonId : '573D00000004CXf',
         endpointURL : 'https://d.la-blitz04.soma.salesforce.com/chat',
         avatarImgURL : 'avatar.png',
         prechatBackgroundImgURL : 'Prechat_image.png',
         waitingStateBackgroundImgURL : 'waitingStateImage.png',
         smallCompanyLogoImgURL : 'smallCompanyLogoImg.png',
         chasitorContentServerEndpointURL : 'https://d.la-blitz04.soma.salesforce.com/content',
         chasitorSrcURL : ['https://na1-blitz04.soma.salesforce.com/jslibrary/1457334052000/ui-sfdc-javascript-impl/SfdcCore.js','https://d.la-blitz04.soma.salesforce.com/content/g/js/37.0/chasitor.js']
        }, "button_goes_here");
   },"https://subbu.blitz04.soma.force.com/esw0108");
   </script>
</html>
    <style>
      body {
         background: url("Spotify-large.png") no-repeat;
      }
      #button_goes_here{
            width: 100%; 
            height: 100%; 
            margin: 0 auto;
            position: relative;
      }
    </style>
