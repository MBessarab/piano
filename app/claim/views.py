from rest_framework import viewsets

from app.claim.models import Claim
from app.claim.serializers import ClaimSerializer


class ClaimView(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer
