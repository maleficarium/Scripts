get-process utorrent | %{ $_.closemainwindow() }
$count = 0
$fw = 0
while (get-process utorrent) {start-sleep -s 1; $count = $count + 1; $count; if ($count -gt 60) {if ($fw -eq 0) {netsh advfirewall firewall set rule name="Kill_uTorrent" new enable =yes; $fw = 1}}}
netsh advfirewall firewall set rule name="Kill_uTorrent" new enable =no
start-process -FilePath "C:\Program Files (x86)\uTorrent\uTorrent.exe" -WorkingDirectory "C:\Program Files (x86)\uTorrent\"

# SIG # Begin signature block
# MIIEUAYJKoZIhvcNAQcCoIIEQTCCBD0CAQExCzAJBgUrDgMCGgUAMGkGCisGAQQB
# gjcCAQSgWzBZMDQGCisGAQQBgjcCAR4wJgIDAQAABBAfzDtgWUsITrck0sYpfvNR
# AgEAAgEAAgEAAgEAAgEAMCEwCQYFKw4DAhoFAAQUFZF67WWpL12/PT/DVicFH1Jt
# U1qgggJTMIICTzCCAbygAwIBAgIQx27sa5duepNK0UANcrAMJjAJBgUrDgMCHQUA
# MDMxMTAvBgNVBAMTKFBvd2VyU2hlbGwgbWFsZWZpY2FyaXVtIENlcnRpZmljYXRl
# IFJvb3QwHhcNMTUwOTE5MTEyMzA5WhcNMzkxMjMxMjM1OTU5WjAiMSAwHgYDVQQD
# ExdQb3dlclNoZWxsIG1hbGVmaWNhcml1bTCBnzANBgkqhkiG9w0BAQEFAAOBjQAw
# gYkCgYEAzO/RVptxfwvduWbjCsaUqXFrl7x1C4zgc1gX57fsJSgUqH2LUZyCagiK
# 8cGyOTI0FArysl5YquS9mARad3aT/8VUWIcjt0ms9yQAE2DnSDBKlDCA2yJlt5pL
# 7CKcJO8ULxIW5Cr6oLskqGelcJE4tn237dBkrGvwEdEjplrBLeECAwEAAaN9MHsw
# EwYDVR0lBAwwCgYIKwYBBQUHAwMwZAYDVR0BBF0wW4AQmu0qu0qkmUpWgCJrx1sh
# X6E1MDMxMTAvBgNVBAMTKFBvd2VyU2hlbGwgbWFsZWZpY2FyaXVtIENlcnRpZmlj
# YXRlIFJvb3SCEH5/vY8ewqGQSKjm1UKawukwCQYFKw4DAh0FAAOBgQAvkjsB+PnM
# yaLhvVH36mwyrniuCMhvHqUOpKoTWuzHmlWPF6zxQk99lFLiTfrOnKpmGvxfmXj8
# rSqatIwU+OXtrxyGzBvo3BoPZC+5IEAnKGlyllsoD54m80ZL3fPJ/QcukIhKoN08
# fxSbwOUSbnoMGVKuCmmTYkghl73DLXw1mDGCAWcwggFjAgEBMEcwMzExMC8GA1UE
# AxMoUG93ZXJTaGVsbCBtYWxlZmljYXJpdW0gQ2VydGlmaWNhdGUgUm9vdAIQx27s
# a5duepNK0UANcrAMJjAJBgUrDgMCGgUAoHgwGAYKKwYBBAGCNwIBDDEKMAigAoAA
# oQKAADAZBgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4w
# DAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQUfS6shTsRVa37UPHUhLYxSi/f
# xpkwDQYJKoZIhvcNAQEBBQAEgYCSWzm2KTxBjKtXqMjxNGuKHwfxm5juPY4fF4B6
# pbVn4AB70A6zHvt0K3Gjefd6IagUsFbWFahXNOWLCnWxsZJ2aZrySOdrkHtdht/Y
# EeHHZOe+Lme53D+j0LWA43CGIQvYddLMD0ZsUqySnRHERdSbQIqXFrUtAGoxG3Za
# CCYhaw==
# SIG # End signature block
