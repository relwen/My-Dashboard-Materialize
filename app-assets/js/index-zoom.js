// For Local module default:
ZoomMtg.setZoomJSLib('node_modules/@zoomus/websdk/dist/lib', '/av');
// For CDN version default
ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.7.7/lib', '/av'); 



import { ZoomMtg } from '@zoomus/websdk'

getSignature(meetConfig) {
	fetch(`${YOUR_SIGNATURE_ENDPOINT}`, {
			method: 'POST',
			body: JSON.stringify({ meetingData: meetConfig })
		})
		.then(result => result.text())
		.then(response => {
			ZoomMtg.init({
				leaveUrl: meetConfig.leaveUrl,
				isSupportAV: true,
				success: function() {
					ZoomMtg.join({
						signature: response,
						apiKey: meetConfig.apiKey,
						meetingNumber: meetConfig.meetingNumber,
						userName: meetConfig.userName,
						// Email required for Webinars
						userEmail: meetConfig.userEmail, 
						// password optional; set by Host
						password: meetConfig.passWord 
						error(res) { 
							console.log(res) 
						}
					})		
				}
			})
	}
}