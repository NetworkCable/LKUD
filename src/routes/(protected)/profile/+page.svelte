<script>
	import { firebaseAuthStore } from '$stores/auth.store';
</script>

{JSON.stringify($firebaseAuthStore.user.email)}
