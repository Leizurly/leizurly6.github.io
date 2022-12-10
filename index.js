<script>
	// Track the amount of time the user has been clocked in
	let clockInTime = null;

	function clockIn() {
		clockInTime = new Date();
		document.getElementById("status").innerHTML = "You have clocked in at: " + clockInTime.toLocaleTimeString();
	}
	function clockOut() {
		if (clockInTime) {
			const clockOutTime = new Date();
			const timeWorked = (clockOutTime - clockInTime) / 1000 / 60 / 60; // Calculate time worked in hours
			document.getElementById("status").innerHTML = "You have clocked out at: " + clockOutTime.toLocaleTimeString() + "<br>Total time worked: " + timeWorked.toFixed(2) + " hours";
		} else {
			document.getElementById("status").innerHTML = "You are not currently clocked in";
		}
	}
</script>
