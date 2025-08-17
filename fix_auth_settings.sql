-- Disable email confirmations in Supabase
UPDATE auth.config 
SET enable_signup = true,
    mailer_autoconfirm = true,
    double_confirm_changes = false
WHERE id = 1;