const settings = {
  theme: "dark",
  fontSize: 14,
  autoSave: true,
};

type SettingsKey = keyof typeof settings;
// "theme" | "fontSize" | "autoSave"

function readSetting(key: SettingsKey) {
  return settings[key];   // type: string | number | boolean
}

readSetting("theme");     // ✅
// readSetting("color");     // ❌ Error




function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", email: "alice@example.com" };

const name = getProperty(user, "name");     // type: string
const id = getProperty(user, "id");         // type: number
// getProperty(user, "age");    