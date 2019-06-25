
#Activate-flow:
1. Phone: Activate - token: generated_1 , status: undefiend
1. Webb: Activate - token: generated_2 , status: undefiend

2. Phone: Code - token: generated_1 , status: undefiend
2. Webb: Code -  token: generated_2 -> generated_1 , status: undefiend

3. Webb: QR - token: generated_1, status: SCANED?
3. Phone: QR - token: generated_1, status: SCANED!

4. Phone: Wait - token: generated_1, status: SIGNED?
4. Webb: Username - token: generated_1, status: SCANED

5. Phone: Wait - token: generated_1, status: SIGNED?
5. Webb: Sign - token: generated_1, status: SIGNED!

6. Webb: Wait - token: generated_1, status: OK?
6. Phone: Passcode - token: generated_1, status: OK!

7. Phone: Receipt - token: generated_1, status: OK
7. Webb: Receipt - token: generated_1, status: OK

#Login-flow:

1. Webb: Login - status: SIGNED?
1. Phone: Login - status: LOGIN!

2. Webb: Login - status: SIGNED?
2. Phone: Sign - status: SIGNED!

3. Webb: Start - status: OK
2. Phone: Start - status: OK

#Sign-flow

1. Phone: CheckSign - status: SIGN?
1. Webb: Start - status: SIGN!

2. Webb: Sign - status: SIGNED?
2. Phone: Sign - status: SIGNED!

3. Phone: Start - status: OK
3. Webb: Receipt - status: OK
