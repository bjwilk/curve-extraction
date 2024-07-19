npm install

# create .env file at root level with these contents:
VITE_PRIVATE_KEY_1=private_key_for_account_1
VITE_ADDRESS_1=address_for_account_1
VITE_ADDRESS_2=address_for_account_2
VITE_INFURA_ID=your_infura_id

# Once you have created a lock on curve.fi in the Locker, this site will track its expiry and when unlocked, extract tokens form contract, send back to wallet that was used to lock curve and then send to account 2.

# This program was designed to extract my curve tokens upon release if my wallet was comprimised and send to safe wallet before any bot could steal them.
