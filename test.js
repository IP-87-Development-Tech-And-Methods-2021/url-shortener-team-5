describe("test user sign up", () => {
    it("can sign up as new user", async () => {
      // we will write this function next
      const inbox = await generateNewEmailAddress();
      await page.type('input[name="password"]', password);
      await page.type('input[name="email"]', inbox.email);
      await page.$eval('input[name="submit"]', (btn) => btn.click());
    });
  });

  // test continued
import { MailSlurp } from "mailslurp-client"
const api = new MailSlurp({ apiKey: "test" })

async function generateNewEmailAddress() {
  return  = await api.createInbox()
}

// get the verification code for a given inboxId
async function getVerificationCode(inboxId) {
    const emails = await api.getEmails(inboxId, { minCount: 1 });
    const latestEmail = await api.getEmail(emails[0].id);
    const verificationCode = /code = (.*)/.exec(latestEmail.content)[1];
    return verificationCode;
  }