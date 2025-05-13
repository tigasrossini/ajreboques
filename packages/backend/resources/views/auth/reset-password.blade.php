<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redefinir senha</title>
</head>
<body>
    <h1>Redefinir sua senha</h1>

    <form method="POST" action="{{ route('password.update') }}">
        @csrf
        <input type="hidden" name="token" value="{{ $token }}"/> 
        <label>Email:</label>
        <input type="email" name="email" required value="{{ old('email') }}"/>

        <label>Nova senha:</label>
        <input type="password" name="password" required>

        <label>Confirmar nova senha:</label>
        <input type="password" name="password_confirmation" required>

        <button type="submit">Atualizar senha</button>
    </form>
</body>
</html>