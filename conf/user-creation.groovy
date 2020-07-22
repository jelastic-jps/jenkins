import hudson.model.*
import hudson.security.*
import hudson.tasks.Mailer

def userId = "jelastic"
def password = "password"
def email = "EMAIL"
def instance = jenkins.model.Jenkins.instance
def existingUser = instance.securityRealm.allUsers.find {it.id == userId}

if (existingUser == null) {
    def user = instance.securityRealm.createAccount(userId, password)
    user.addProperty(new Mailer.UserProperty(email));

    def strategy = (GlobalMatrixAuthorizationStrategy) instance.getAuthorizationStrategy()
    strategy.add(Hudson.READ, userId)
    instance.setAuthorizationStrategy(strategy)
    instance.save()
} else {
    existingUser.addProperty(new Mailer.UserProperty(email));
}
