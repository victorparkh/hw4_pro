alert("Create your account");

do {
  userName = prompt(
    "Your Name (must be at least six characters, e.g. Anna Ivanova)"
  );
} while (userName.length < 6);

do {
  nickName = prompt(
    "Nick Name (must be at least six characters, without whitespaces and must begin with a letter, e.g. annaivanova)"
  ).toLowerCase();
} while (
  nickName.length < 6 ||
  nickName.indexOf(" ") > -1 ||
  isNaN(nickName[0]) == false
);

do {
  eMail = prompt(
    "Email Address (must be at least six characters, without whitespaces, begin with a letter and contains @, e.g. annaivanova@gmail.com)"
  );
} while (
  eMail.length < 6 ||
  eMail.indexOf(" ") > -1 ||
  isNaN(eMail[0]) == false ||
  eMail.indexOf("@") < 2
);

do {
  userYear = prompt("Year of Birth (must be a number, e.g. 1990)");
} while (isNaN(userYear) != false);

document.write("<ul>");
document.write(`<li>Your Name: ${userName}</li>`);
document.write(`<li>Nick Name: ${nickName}</li>`);
document.write(
  `<li>Email Address: <a href="mailto:${eMail}">${eMail}</a></li>`
);
document.write(`<li>Age: ${2021 - userYear}</li>`);
document.write("<ul>");
