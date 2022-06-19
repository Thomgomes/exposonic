const AuthContext = React.createContext(null);

const signIn = async (email, password) => {
    const creds = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(creds);
    setUser(newUser);
  };

  const signUp = async (email, password) => {
    await app.emailPasswordAuth.registerUser({ email, password });
  };

  const signOut = () => {
    if (user == null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);

    return (
        <Button
          title="Log Out"
          onPress={() => {
            Alert.alert("Log Out", null, [
              {
                text: "Yes, Log Out",
                style: "destructive",
                onPress: () => {
                  navigation.popToTop();
                  closeRealm();
                  signOut();
                },
              },
              { text: "Cancel", style: "cancel" },
            ]);
          }}
        />
      );
  };

  