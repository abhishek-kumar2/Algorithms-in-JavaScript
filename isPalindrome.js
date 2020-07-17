function isPalindrome(text) {
	text = text.replace(/[^\w]/g, "").toLowerCase();
	return text.split("").reverse().join("") === text;
}

console.log(isPalindrome("Madam, I'm Adam"));
